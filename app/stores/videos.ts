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
  }

  /**
   * Fetch all videos from API
   * Merge all videos into the ones in store
   */
  async fetch() {
    try {
      this.loading = true;
      // Fetch videos from API and wait for the response
      const fetchedVideos = await getVideos();
      runInAction(() => {
        // Merge fetched videos with the ones in the store
        this.list = [...this.list, ...fetchedVideos];
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