import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/post";
import { addToQueue, clearPlaying, clearQueue, loadPlaying, loadQueue, moveBackwardInQueue, moveForwardInQueue, removeFromQueue, setPlaying } from "./playing.action";

export interface PlayingState {
  playing: Post | undefined;
  queue: Post[];
  error: string | null;
}

export const initialState: PlayingState = {
  playing: undefined,
  queue: [],
  error: null,
}

export const playingReducer = createReducer(
  initialState,

  on(setPlaying, (state, { playing }) => {
    const newQueue = state.queue.filter(post => post.id != playing.id);
    localStorage.setItem("queue", JSON.stringify(newQueue));
    localStorage.setItem("playing", JSON.stringify(playing));
    localStorage.removeItem("playingTime");
    return ({
      ...state,
      playing: playing,
      queue: newQueue
    })
  }),

  on(loadPlaying, (state) => {
    const data = localStorage.getItem("playing");
    if (data != null) {
      const queue =  JSON.parse(data) as Post
      return ({
        ...state,
        playing: queue
      })
    }
    return ({
      ...state,
    })
  }),

  on(clearPlaying, (state) => {
    localStorage.removeItem("playing");
    localStorage.removeItem("playingTime");
    return ({
      ...state,
      playing: undefined
    })

  }),

  on(addToQueue, (state, { post }) =>{

    if (state.playing == post || state.queue.find(p => p == post)) {
      return {...state}
    }
    const newQueue = state.queue.concat(post);
    localStorage.setItem("queue", JSON.stringify(newQueue))

    return ({
      ...state,
      queue: newQueue
    })
  } ),

  on(removeFromQueue, (state, { index }) => {
    const newQueue = state.queue.filter((post) => state.queue.indexOf(post) != index);
    localStorage.setItem("queue", JSON.stringify(newQueue));

    return ({
      ...state,
      queue: newQueue
    })
  }),

  on(clearQueue, (state) => {
    localStorage.removeItem("queue");
    return ({
      ...state,
      queue: []
    })

  }),

  on(loadQueue, (state) => {
    const data = localStorage.getItem("queue");
    if (data != null) {
      const queue =  JSON.parse(data) as Post[]
      return ({
        ...state,
        queue: queue
      })
    }
    return ({
      ...state,
    })
  }),

  on(moveForwardInQueue, (state, { index }) => {
    let newQueue = state.queue.slice();
    if (index > 0 && newQueue.length != 0)  {
      let temp = newQueue[index];
      newQueue[index] = newQueue[index-1];
      newQueue[index-1] = temp
      localStorage.setItem("queue", JSON.stringify(newQueue))
    }

    return ({
    ...state,
    queue: newQueue
    });
  }),

  on(moveBackwardInQueue, (state, { index }) => {
    let newQueue = state.queue.slice();
    if (index < newQueue.length-1)  {
      let temp = newQueue[index];
      newQueue[index] = newQueue[index+1];
      newQueue[index+1] = temp
      localStorage.setItem("queue", JSON.stringify(newQueue))
    }

    return ({
    ...state,
    queue: newQueue
    });
  }),

)
