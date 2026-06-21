import cv2
import numpy as np
import os
from PIL import Image, ImageEnhance

input_path = r"C:\Users\Army\Desktop\Temp\WhatsApp Unknown 2026-06-21 at 12.51.11 AM\WhatsApp Image 2026-06-21 at 12.50.34 AM (2).jpeg"
output_dir = r"d:\iRA Synergy\ira-synergy\public\images\products\fatka-machine"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Load image
img = cv2.imread(input_path)
if img is None:
    print("Error loading image")
    exit(1)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Threshold to isolate dark regions (machines, text, lines)
# Background is white (255). We use 250 to catch everything non-white.
_, thresh = cv2.threshold(gray, 245, 255, cv2.THRESH_BINARY_INV)

# The collage has gray dividing lines. To break connections between different cells,
# we can use morphological opening or simply find contours.
# Since lines are thin, we can erode the thresh image slightly to break thin lines.
kernel = np.ones((5,5), np.uint8)
thresh_eroded = cv2.erode(thresh, kernel, iterations=2)
# Dilate back to restore object size
thresh_dilated = cv2.dilate(thresh_eroded, kernel, iterations=2)

contours, _ = cv2.findContours(thresh_dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

img_idx = 1
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    
    # Filter out small noise or thin lines (w or h too small)
    if w > 150 and h > 150:
        # Add some padding
        pad = 20
        y1 = max(0, y - pad)
        y2 = min(img.shape[0], y + h + pad)
        x1 = max(0, x - pad)
        x2 = min(img.shape[1], x + w + pad)
        
        crop_img = img[y1:y2, x1:x2]
        
        # Determine if it's the table by checking if it contains mostly text or just the shape
        # Actually we can just keep all of them. The user can see all images.
        
        # Convert back to PIL for enhancement
        crop_pil = Image.fromarray(cv2.cvtColor(crop_img, cv2.COLOR_BGR2RGB))
        
        # Enhance Color
        enhancer = ImageEnhance.Color(crop_pil)
        crop_pil = enhancer.enhance(1.1)
        
        # Enhance Contrast
        enhancer = ImageEnhance.Contrast(crop_pil)
        crop_pil = enhancer.enhance(1.1)
        
        # Enhance Sharpness
        enhancer = ImageEnhance.Sharpness(crop_pil)
        crop_pil = enhancer.enhance(1.2)
        
        # Save
        out_path = os.path.join(output_dir, f"angle-{img_idx}.jpg")
        crop_pil.save(out_path, "JPEG", quality=95)
        print(f"Saved {out_path} (Size: {w}x{h})")
        img_idx += 1

print(f"Total images saved: {img_idx - 1}")
