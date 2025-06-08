
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("Funny Cats", "Alice", 120);
video1.watch(); 
// Alice watched all 120 seconds of Funny Cats!

const video2 = new Video("JavaScript Tutorial", "Bob", 600);
video2.watch(); 
//  Bob watched all 600 seconds of JavaScript Tutorial!

// 5
const videosData = [
  { title: "Funny Cats", uploader: "Alice", time: 120 },
  { title: "JavaScript Tutorial", uploader: "Bob", time: 600 },
  { title: "Travel Vlog", uploader: "Charlie", time: 300 },
  { title: "Cooking Show", uploader: "Diana", time: 480 },
  { title: "Gaming Highlights", uploader: "Eve", time: 150 }
];

// 6 
const videoInstances = [];

for (const videoData of videosData) {
  const video = new Video(videoData.title, videoData.uploader, videoData.time);
  videoInstances.push(video);
}


for (const vid of videoInstances) {
  vid.watch();
}
