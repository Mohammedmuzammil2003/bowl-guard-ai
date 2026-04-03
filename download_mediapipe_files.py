import requests
import os

# URLs for the missing MediaPipe files
files_to_download = {
    "pose_landmark_cpu.binarypb": "https://github.com/google/mediapipe/raw/master/mediapipe/modules/pose_landmark/pose_landmark_cpu.binarypb",
    "pose_landmark_lite.binarypb": "https://github.com/google/mediapipe/raw/master/mediapipe/modules/pose_landmark/pose_landmark_lite.binarypb",
    "pose_landmark_full.binarypb": "https://github.com/google/mediapipe/raw/master/mediapipe/modules/pose_landmark/pose_landmark_full.binarypb",
    "pose_landmark_heavy.binarypb": "https://github.com/google/mediapipe/raw/master/mediapipe/modules/pose_landmark/pose_landmark_heavy.binarypb"
}

# Directory where MediaPipe modules are installed
mediapipe_dir = r"C:\Users\moham\anaconda3\Lib\site-packages\mediapipe\modules\pose_landmark"

os.makedirs(mediapipe_dir, exist_ok=True)

for filename, url in files_to_download.items():
    filepath = os.path.join(mediapipe_dir, filename)
    if not os.path.exists(filepath):
        print(f"Downloading {filename}...")
        try:
            response = requests.get(url)
            response.raise_for_status()
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"Successfully downloaded {filename}")
        except Exception as e:
            print(f"Failed to download {filename}: {e}")
    else:
        print(f"{filename} already exists")

print("Download process completed.")
