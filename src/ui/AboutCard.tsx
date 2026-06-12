import { gradients, card} from "../lib/constants";
import { useLanguage } from "../lib/LanguageContext"

export default function AboutCard() {
	const { t } = useLanguage()
    return (
        <div className={`p-[1px] rounded-2xl ${gradients.border} ${card.shadow}`}>
            <div className={`${card.background} ${card.textBodyColor} rounded-2xl grid grid-cols-1 lg:flex p-2 px-5`}>
                <div className="p-4">
                    <img className="max-w-md w-full lg:w-auto lg:max-w-sm h-full object-cover object-top rounded-xl mx-auto grayscale-[30%]" alt="photo_of_Me" src={`${process.env.PUBLIC_URL}/images/profile_picture.jpg`}/>
                </div>
                <div className="text-lg p-5 my-auto space-y-8">
                    <p className={`text-2xl font-heading font-bold  ${gradients.subtitle}`}>
		    	{t.about.title}
                    </p>
                    <p>
		    	{t.about.first_paragraph}
                    </p>
                    <p>
		    	{t.about.second_paragraph}
                    </p>
                </div>
            </div>
        </div>
    )
}
