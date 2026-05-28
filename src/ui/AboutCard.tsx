import { gradients } from "../lib/constants";

export default function AboutCard() {
    return (
        <div className={`p-[1px] rounded-2xl ${gradients.border} shadow-lg shadow-purple-900/80`}>
            <div className="bg-dark-gray rounded-2xl grid grid-cols-1 lg:flex p-2 px-5">
                <div className="p-4">
                    <img className="max-w-md w-full lg:w-auto lg:max-w-sm h-full object-cover object-top rounded-xl mx-auto grayscale-[30%]" alt="photo_of_Me" src={`${process.env.PUBLIC_URL}/images/profile_picture.jpg`}/>
                </div>
                <div className="text-lg p-5 my-auto space-y-8">
                    <p className={`text-2xl font-heading font-bold  ${gradients.subtitle}`}>
                        CS Graduate · Argentina
                    </p>
                    <p>
                        I'm drawn to problems that sit at the edge of what's currently possible. 
                        Whether that's understanding how a network routes packets, how a model learns to represent a 3D scene, or how to make software that actually scales
                        — I want to know how things work at a deep level.
                    </p>
                    <p>
                        I'm based in Argentina, recently graduated in Computer Science, and always looking for the next interesting problem to dig into.
                        I care a lot about writing clean, intentional code and building things that are worth building.
                    </p>
                </div>
            </div>
        </div>
    )
}