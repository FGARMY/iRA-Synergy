import cv2
import numpy as np
import os

input_path = r"C:\Users\Army\Desktop\Temp\WhatsApp Unknown 2026-06-21 at 12.51.11 AM\Our Clients.jpeg"
output_dir = r"d:\iRA Synergy\ira-synergy\public\images\clients"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

img = cv2.imread(input_path)
if img is None:
    print("Error loading image")
    exit(1)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

# Dilate to merge disconnected parts of the same logo (text + icon)
# but not so much that it merges adjacent logos
kernel = np.ones((10, 10), np.uint8)
thresh_dilated = cv2.dilate(thresh, kernel, iterations=1)

contours, _ = cv2.findContours(thresh_dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

img_idx = 1
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    
    # Filter out text like "OUR CLIENTS" at the top which is wide and short
    # Filter out small noise
    if w > 40 and h > 40 and (w/h) < 10:
        pad = 10
        y1 = max(0, y - pad)
        y2 = min(img.shape[0], y + h + pad)
        x1 = max(0, x - pad)
        x2 = min(img.shape[1], x + w + pad)
        
        crop_img = img[y1:y2, x1:x2]
        
        out_path = os.path.join(output_dir, f"client-{img_idx}.jpg")
        cv2.imwrite(out_path, crop_img)
        img_idx += 1

print(f"Total images saved: {img_idx - 1}")
