function Button({ color, onClick }) {
    let colorNew = color.toLowerCase();

    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full ${["yellow", "pink", "lavender", "white"].includes(colorNew) ? 'text-black' : 'text-white'} shadow-lg`}
            style={{ backgroundColor: colorNew }}>{color}
        </button>
    )
};

export default Button;