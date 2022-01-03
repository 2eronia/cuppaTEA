// [rule: 摸鱼]
sendText(request("https://vps.suyiboke.com/api/face/my").replace(/:/g, "").replace("自己的", "自己的。\n").replace("上班是", "\n上班是").replace(/<br\/>/g, "\n"))