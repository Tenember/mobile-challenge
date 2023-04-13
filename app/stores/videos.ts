/**
 *  Videos MobX Store
 */
import { makeAutoObservable, runInAction } from "mobx";
import { VideoType } from "../../types/video";

import { getVideos } from "../api/videos";

export default class VideosStore {
  loading: boolean = false;
  list: VideoType[] = [];

  constructor() {
    makeAutoObservable(this);

    this.list.push({
      id: "1",
      publishedAt: "2023-04-14",
      videoUrl:
        "https://res.cloudinary.com/hsiz9ovy1/video/upload/v1680209329/sharing/ending_wp443t.mp4",
    });
  }

  /**
   * Fetch all videos from API
   * Merge all videos into the ones in store
   */
  async fetch() {
    try {
      this.loading = true;
      const { data } = await getVideos();
      runInAction(() => {
        // To-do #1:
        // Merge videos from API with videos in store
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
