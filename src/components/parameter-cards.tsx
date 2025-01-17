export default function ParameterCards({ type }: { type: string }) {
    // Map types to their corresponding image paths
    const typeImageMap: { [key: string]: string } = {
        "Dissolved Oxygen": "/assets/dissolved-oxygen.png",
        "pH Level": "/assets/ph-level.png",
        Temperature: "/assets/temperature.png",
        Turbidity: "/assets/turbidity.png",
    };

    // Get the image path based on the type, or use a default image
    const imagePath = typeImageMap[type] || "/assets/default-icon.png";

    return (
        <div className="rounded-2xl odd:bg-prumspurple even:bg-prumspink p-4 flex flex-col min-w-[100px] w-64">
            <div className="mb-2">
                {/* Add the date dynamically */}
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            {/* Update Code to add dummy data for each */}
            <h1 className="text-2xl font-bold">1234</h1>
            <h2 className="text-lg">{type}</h2>
            {/* Render the image dynamically */}
            <img
                src={imagePath}
                alt={`${type} icon`}
                className="w-20 h-20 mt-2 self-center"
            />
        </div>
    );
}
