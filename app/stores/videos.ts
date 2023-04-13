/**
 *  Videos MobX Store
 */
import { makeAutoObservable, runInAction } from "mobx";
import { VideoType } from "../../types/video";
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
      runInAction(() => {
        // Todo #1:
        // Fetch all videos from API
        // and set them to the store
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
