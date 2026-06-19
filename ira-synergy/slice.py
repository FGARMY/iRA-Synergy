from PIL import Image, ImageChops
import os

os.makedirs('d:/iRA Synergy/ira-synergy/public/images/partners', exist_ok=True)
img = Image.open('C:/Users/Army/.gemini/antigravity-ide/brain/1db70232-0cd3-405a-bd85-b324ec357feb/media__1781849215224.jpg').convert('RGB')
w, h = img.size
segment_w = w // 7
names = ['smart-city', 'logo2', 'logo3', 'swachh-bharat', 'mnre', 'fit-india', 'digital-india']

for i in range(7):
    box = (i*segment_w, 0, (i+1)*segment_w, h)
    segment = img.crop(box)
    bg = Image.new('RGB', segment.size, (255,255,255))
    diff = ImageChops.difference(segment, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        segment.crop(bbox).save(f'd:/iRA Synergy/ira-synergy/public/images/partners/{names[i]}.jpg', quality=100)
