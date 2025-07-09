import React, {useState} from "react";

function CarSelection() {
    // Danh sách xe và màu xe
    const cars = ["Mercedes", "BMW", "Audi", "Toyota", "Honda"];
    const colors = ["Red", "Blue", "Green", "Yellow", "Black"];

    // State để lưu trữ lựa chọn
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    // Hàm xử lý sự kiện khi chọn xe
    const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCar(event.target.value);
    };

    // Hàm xử lý sự kiện khi chọn màu
    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <>
            <h1>Select your car</h1>
            <div>
                <label>Select a car:</label>
                <select value={selectedCar} onChange={handleCarChange}>
                    {cars.map((car, index) => (
                        <option key={index} value={car}>
                            {car}
                        </option>
                    ))}
                </select>
                <br></br>
                <label>Select a color:</label>
                <select value={selectedColor} onChange={handleColorChange}>
                    {colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
                <p>
                    You selected: {selectedCar} with {selectedColor} color
                </p>
            </div>
        </>
    );
}

export default CarSelection;
