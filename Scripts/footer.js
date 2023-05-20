export const footer = () => {
    return(`
    <div id="f_cover">
    <div id="footer">
        <div>
          <img src="data:image/jpeg;base64,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L3DTFoO5BBWZd2LNl0aZc4Yh2d5Ow02NVdbjlo+Y7UN3kVr6r94LsMmHYw7A/QnUEcRvQdlm2/AjAFsRoO1riAa7s9e5cN57egshOh4g9zgRhBrTmRoq3GuTMBxDS0jYa0+hXfZNyDXFMOy+EGpPMoIWwbtRJkFwOBoyBIOZ3BT8ncUA1ixS4bmileZKt8GE1jQ1oAaMgBovtB4SUmyE0MhtDWjYPM717oiCPvBLGJLxWN1LcuYzp9Fl1lzZgRmvpXCcx5rYVAWpdOBGcX5scczh0PGiDinb8QgysJri/c4UA4k7VVZmzZiLDdNvFRWpr7RG8DcrlJXMl2GrsT+ByHeArCYTcOGgw0pSmVN1EGc3Mttku5zYpo19M9aEb/FdVt2s+eiCBLA4NuzEd53NCkJy4zC+sN+Fp90itOAKnbFsWFLNowVcdXHU8OAQeFm2C2FLOg6l7XYnbyRTwCo1gTglJn8UEAYmu3jZVakoS27tQZg4zVr/AIht5hB42le6XYysNwiOOjRX6k6KIu/ZMSai/wBVM+zWrRv3D5Qu2RuRCa4OiOLwNmgPNWljAAABQDIAbtyD6REQZ70hSZEZsWnZe2ldxbs8F93UvPDgQzDih2pIIFdaZU7ld5+SZGYWRG1afEHeDsKrjriwa1D3gbsvNBD27eB824QJdpwEgcXHjuC5LwXZdLQ2PriByflk07O5XyyrEgy/5be1tccz/C740Jr2lrgC05EHQoKLcq34cJphRXYc6tOziCrY63pYCpjs8a/QKDtC48NxrCeWA7CMQHJc8K4efbjVHBv8oPu3L3Bw6uUq5xyxUOXyjfxXTdW7hhHro2cQ5gHZxPFSdj3fgy+bAS74nZnu3KWQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==" alt="logo">
        </div>
        <div>
            <p>about us</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Help</p>
        </div>
        <div>
            <p>Contact : 1234567891</p>
            <p>celebrare@gmail.com</p>
        </div>
      
    </div>
    <hr>
    <p>celebrare since 2022</p>
  </div>
    `)
}