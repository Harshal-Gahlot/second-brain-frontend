import type { CardType } from "./Card";
export default function DisplayLinkContent({
    link,
    type,
}: Omit<CardType, "title">) {
    const linkType = {
        youtube: (
            <iframe
                className="w-full aspect-video"
                src={link.replace("watch?v=", "embed/").split("&")[0]}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        ),
        twitter: (
            <>
                <blockquote className="twitter-tweet" data-theme="dark">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>{" "}
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                ></script>{" "}
            </>
        ),
    };
    return linkType[type];
}
