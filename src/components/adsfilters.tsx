import { useState } from "react";

const FilterButtons: React.FC = () => {  
    const [numberOfParticipants, setNumberOfParticipants] = useState<number | string>("");
    const [km, setKm] = useState<number | string>("");
    const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
    
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 9)) {
            setNumberOfParticipants(value);
        }
        else {
            setNumberOfParticipants("");
        }
    };

    const handleKmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === "" || (parseInt(value) >= 0)) {
            setKm(value);
        }
        else {
            setKm("");
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = event.target.value;
        if (newDate !== "") {
            setDate(newDate);
        }
    };

    return (
        <div className="container relative z-5 flex flex-col my-auto mt-10 h-1/2 ml-0 justify-between ml-5 lg:mx-auto lg:w-1/2 lg:flex-row">
            {/* Champ de sélection de la matière */}
            <form>
                <label htmlFor="field" className="text-sm text-black font-semibold mb-2">Choose a field</label>
                <select 
                className="bg-gray-50 border text-black text-sm rounded-lg block w-30 p-1.5">
                    <option defaultValue="Choose a filed">Field</option>
                    <option value="Informatics">Informatics</option>
                    <option value="Biology">Biology</option>
                    <option value="Religion">Religion</option>
                    <option value="Arabic">Arabic</option>
                </select>
            </form>

            {/* Champ de sélection du nombre de participants */}
            <form>
                <label htmlFor="participants" className="text-sm text-black font-semibold mb-2">Number of participants</label>
                <input
                    id="participants"
                    type="number"
                    value={numberOfParticipants}
                    min="1"
                    max="9"
                    onChange={(event) => {
                        handleNumberChange(event);
                    }}                    
                    className="bg-gray-50 border text-black text-sm rounded-lg block w-35 p-1.5"
                    placeholder="Choose number"
                />
            </form>

            {/* Champ du nombre de Km */}
            <form>
                <label htmlFor="km" className="text-sm text-black font-semibold mb-2">Distance (Km)</label>
                <input
                    id="km"
                    type="number"
                    value={km}
                    min="0"
                    onChange={(event) => {
                        handleKmChange(event);
                    }}                    
                    className="bg-gray-50 border text-black text-sm rounded-lg block w-20 p-1.5"
                    placeholder="Km"
                />
            </form>

            {/* Champ de sélection de la date */}
            <form>
                <label htmlFor="date" className="text-sm text-black font-semibold mb-2">Date</label>
                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={handleDateChange}                   
                    className= "bg-gray-50 border text-black text-sm rounded-lg block w-30 p-1.5"
                />
            </form>
        </div>
    );
};

export default FilterButtons;
