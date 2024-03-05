import { useState } from "react";
import "../styles/main.css";
import { REPLHistory } from "./history/REPLHistory";
import { REPLInput } from "./input/REPLInput";


/**
 * This is a higher level component that organizes the rest of the components.
 * @constructor
 */

export default function REPL() {
    console.log(' ' == 0)
    const [history, setHistory] = useState<history[]>([]); //used to store history
    const [modeIsBrief, setModeIsBrief] = useState<boolean>(true); //indicates if in brief mode
    // shared state that holds all the commands submitted.
    return (
        <div className="repl">
            <REPLHistory historyList={history} />
            <hr></hr>
            <REPLInput
                historyList={history}
                setHistory={setHistory}
                modeIsBrief={modeIsBrief}
                setModeIsBrief={setModeIsBrief}
            />
        </div>
    );
}