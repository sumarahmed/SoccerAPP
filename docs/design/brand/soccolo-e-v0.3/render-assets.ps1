[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$assetDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$chromeOnPath = Get-Command chrome -ErrorAction SilentlyContinue
$chromeCandidates = @(
    $(if ($chromeOnPath) { $chromeOnPath.Source }),
    $(if ($env:ProgramFiles) { Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe' }),
    $(if (${env:ProgramFiles(x86)}) { Join-Path ${env:ProgramFiles(x86)} 'Google\Chrome\Application\chrome.exe' })
) | Where-Object { $_ }
$chrome = $chromeCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if (-not $chrome) {
    throw 'Google Chrome was not found in an expected location.'
}

function Export-SvgPng {
    param(
        [Parameter(Mandatory)] [string] $Source,
        [Parameter(Mandatory)] [string] $Destination,
        [Parameter(Mandatory)] [int] $Width,
        [Parameter(Mandatory)] [int] $Height
    )

    $sourcePath = Join-Path $assetDir $Source
    $destinationPath = Join-Path $assetDir $Destination
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Missing SVG source: $sourcePath"
    }

    $uri = [System.Uri]::new($sourcePath).AbsoluteUri
    & $chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --default-background-color=00000000 "--window-size=$Width,$Height" "--screenshot=$destinationPath" $uri | Out-Null
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $destinationPath)) {
        throw "Chrome failed to render $Source"
    }
}

function Resize-Png {
    param(
        [Parameter(Mandatory)] [string] $Source,
        [Parameter(Mandatory)] [string] $Destination,
        [Parameter(Mandatory)] [int] $Size
    )

    Add-Type -AssemblyName System.Drawing
    $sourcePath = Join-Path $assetDir $Source
    $destinationPath = Join-Path $assetDir $Destination
    $sourceImage = [System.Drawing.Image]::FromFile($sourcePath)
    try {
        $outputImage = New-Object System.Drawing.Bitmap($Size, $Size)
        try {
            $graphics = [System.Drawing.Graphics]::FromImage($outputImage)
            try {
                $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
                $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $graphics.DrawImage($sourceImage, 0, 0, $Size, $Size)
            }
            finally {
                $graphics.Dispose()
            }
            $outputImage.Save($destinationPath, [System.Drawing.Imaging.ImageFormat]::Png)
        }
        finally {
            $outputImage.Dispose()
        }
    }
    finally {
        $sourceImage.Dispose()
    }
}

Export-SvgPng 'soccolo-app-icon-1024.svg' 'soccolo-app-icon-1024.png' 1024 1024
Export-SvgPng 'soccolo-lockup-horizontal-light.svg' 'soccolo-lockup-horizontal-light.png' 900 200
Export-SvgPng 'soccolo-lockup-horizontal-dark.svg' 'soccolo-lockup-horizontal-dark.png' 900 200
Export-SvgPng 'soccolo-lockup-stacked-light.svg' 'soccolo-lockup-stacked-light.png' 560 420
Export-SvgPng 'soccolo-lockup-stacked-dark.svg' 'soccolo-lockup-stacked-dark.png' 560 420
Export-SvgPng 'soccolo-export-intro-frame-16x9.svg' 'soccolo-export-intro-frame-1920x1080.png' 1920 1080
Export-SvgPng 'soccolo-review-board.svg' 'soccolo-review-board.png' 1600 1040
Export-SvgPng 'soccolo-android-adaptive-foreground.svg' 'soccolo-android-adaptive-foreground.png' 432 432
Export-SvgPng 'soccolo-android-adaptive-background.svg' 'soccolo-android-adaptive-background.png' 432 432

foreach ($size in @(16, 24, 32, 48)) {
    Resize-Png 'soccolo-app-icon-1024.png' "soccolo-app-icon-$size.png" $size
}

$iosExports = @(
    @{ Name = 'soccolo-ios-notification-20@2x.png'; Size = 40 },
    @{ Name = 'soccolo-ios-notification-20@3x.png'; Size = 60 },
    @{ Name = 'soccolo-ios-settings-29@2x.png'; Size = 58 },
    @{ Name = 'soccolo-ios-settings-29@3x.png'; Size = 87 },
    @{ Name = 'soccolo-ios-spotlight-40@2x.png'; Size = 80 },
    @{ Name = 'soccolo-ios-spotlight-40@3x.png'; Size = 120 },
    @{ Name = 'soccolo-ios-app-60@2x.png'; Size = 120 },
    @{ Name = 'soccolo-ios-app-60@3x.png'; Size = 180 },
    @{ Name = 'soccolo-ipad-app-76@2x.png'; Size = 152 },
    @{ Name = 'soccolo-ipad-pro-app-83.5@2x.png'; Size = 167 }
)
foreach ($export in $iosExports) {
    Resize-Png 'soccolo-app-icon-1024.png' $export.Name $export.Size
}

$versionOutput = & $chrome --version 2>&1
$version = (($versionOutput | Out-String).Trim())
if (-not $version) {
    $fileVersion = (Get-Item -LiteralPath $chrome).VersionInfo.ProductVersion
    $version = if ($fileVersion) { "Google Chrome $fileVersion" } else { 'Google Chrome version unavailable' }
}
Write-Output "Rendered 23 PNG assets with $version"
