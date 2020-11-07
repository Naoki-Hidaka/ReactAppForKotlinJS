package view

import model.Video
import react.*
import react.dom.div
import react.dom.h1
import react.dom.h3
import view.component.videoList
import view.component.videoPlayer

class App : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        unwatchedVideos = listOf(
            Video(1, "Building and breaking things", "John Doe", "https://youtu.be/PsaFVLr8t4E"),
            Video(2, "The development process", "Jane Smith", "https://youtu.be/PsaFVLr8t4E"),
            Video(3, "The Web 7.0", "Matt Miller", "https://youtu.be/PsaFVLr8t4E")
        )

        watchedVideos = listOf(
            Video(4, "Mouseless development", "Tom Jerry", "https://youtu.be/PsaFVLr8t4E")
        )
    }

    override fun RBuilder.render() {
        h1 {
            +"KotlinConf Explorer"
        }
        div {
            h3 {
                +"Videos to watch"
            }
            videoList {
                videos = state.unwatchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = {
                    setState {
                        currentVideo = it
                    }
                }
            }
        }
        div {
            h3 {
                +"Videos watched"
            }
            videoList {
                videos = state.watchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = {
                    setState {
                        currentVideo = it
                    }
                }
            }
        }
        state.currentVideo?.let { currentVideo ->
            videoPlayer {
                video = currentVideo
                unwatchedVideo = currentVideo in state.unwatchedVideos
                onWatchedButtonPressed = {
                    if (video in state.unwatchedVideos) {
                        setState {
                            unwatchedVideos -= video
                            watchedVideos += video
                        }
                    } else {
                        setState {
                            watchedVideos -= video
                            unwatchedVideos += video
                        }
                    }
                }
            }
        }
    }
}

external interface AppState : RState {
    var currentVideo: Video?
    var unwatchedVideos: List<Video>
    var watchedVideos: List<Video>
}