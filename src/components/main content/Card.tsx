import ShareIcon from "../../icons/shareicon";
import DisplayLinkContent from "./displayLinkContent";

export interface CardType {
    title: string;
    link: string;
    type: "youtube" | "tweet";
}
const commonTopBarClass = "flex items-center justify-between text-gray-500 p-4";
export default function Card({ title, link, type }: CardType) {
    return (
        <div className="bg-slate-900 rounded-md outline-1 outline-gray-200 w-84 min-h-60 max-h-fit overflow-hidden">
            <div
                className={
                    type === "tweet"
                        ? commonTopBarClass + " pb-1.5"
                        : commonTopBarClass
                }
            >
                <div className="flex items-center gap-2">
                    <ShareIcon />
                    <p className="text-white">{title}</p>
                </div>
                <div className="flex items-center gap-4">
                    <ShareIcon />
                    <ShareIcon />
                </div>
            </div>
            <div className={type === "tweet" ? "px-2" : ""}>
                <DisplayLinkContent link={link} type={type} />
            </div>
        </div>
    );
}
