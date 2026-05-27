export default function AboutCard() {
    return (
        <div className="bg-dark-gray rounded-2xl text grid grid-cols-1 lg:flex ">
            <img className="w-400 h-400 bg-white" alt="photo_of_Me" src="">

            </img>
            <div className="text-lg p-5">
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
    )
}