import { useState } from "react";

// This is leftover from previous. Don't think i need it.

function NewButton() {
    const [count, setCount] = useState(0);

    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

export default NewButton;