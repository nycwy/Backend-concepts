export default function Card({ jokes }) {
    return (
        <>
            {jokes.map((joke) => (
                <div className="p-5 text-center border-b-2 w-full" key={joke.id}>
                    <h2 className="text-green-500 text-2xl">{joke.title}</h2>
                    <p>{ joke.text}</p>
                </div>
            ))}
        </>
    )
}