@file:JsModule("react-share")
@file:JsNonModule

package view.component

import react.RClass
import react.RProps

@JsName("EmailIcon")
external val emailIcon: RClass<IConProps>

@JsName("EmailShareButton")
external val emailShareButton: RClass<ShareButtonProps>

@JsName("TelegramIcon")
external val telegramIcon: RClass<IConProps>

@JsName("TelegramShareButton")
external val telegramShareButton: RClass<ShareButtonProps>

external interface ShareButtonProps : RProps {
    var url: String
}

external interface IConProps : RProps {
    var size: Int
    var round: Boolean
}
