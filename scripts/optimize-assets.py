from PIL import Image, ImageOps
from pathlib import Path
import json, shutil, subprocess
from collections import Counter
root=Path(__file__).resolve().parents[1]; source=root/'originals/assets';source.mkdir(exist_ok=True)
if (root/'public/Images').exists():shutil.move(str(root/'public/Images'),str(source/'Images'))
out=root/'public/optimized';out.mkdir(exist_ok=True)
stem_counts=Counter(p.stem for p in (source/'Images').iterdir() if p.suffix.lower() in ['.png','.jpg','.jpeg','.webp'])
def convert(p):
 key='/Images/'+p.name
 if p.suffix.lower() not in ['.png','.jpg','.jpeg','.webp']:return None
 with Image.open(p) as raw:
  im=ImageOps.exif_transpose(raw).convert('RGB'); entries=[]
  for w in [640,1280,1920]:
   cp=im.copy();cp.thumbnail((w,w*3));name=f'{p.stem}-{w}.webp' if stem_counts[p.stem]==1 else f'{p.stem}-{p.suffix.lower()[1:]}-{w}.webp';temp=out/(name+'.tmp.webp');cp.save(temp,'WEBP',quality=86,method=6)
   with Image.open(temp) as check: check.load()
   temp.replace(out/name);entries.append({'url':'/optimized/'+name,'width':cp.width,'height':cp.height})
 return key,entries
manifest=dict(x for x in map(convert,(source/'Images').iterdir()) if x)
(root/'src/redesign/assets.json').write_text(json.dumps(manifest,indent=2))
for name in ['video','video1']:
 p=source/'Images'/f'{name}.mp4'
 if p.exists():
  subprocess.run(['ffmpeg','-v','error','-y','-i',str(p),'-vf',"scale='min(1280,iw)':-2",'-c:v','libx264','-preset','fast','-crf','25','-c:a','aac','-b:a','128k','-movflags','+faststart',str(out/f'{name}.mp4')],check=True)
print('Optimized',len(manifest),'images and retained original assets')
