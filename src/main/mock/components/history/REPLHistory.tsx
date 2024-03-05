import "../../styles/main.css";

interface REPLHistoryProps {
  // shared state tracking all the pushed commands
  historyList: history[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {/* This is where command history will go */}

      {/* only put command if not brief (ie verbose) */}
      {props.historyList.map((hEntry) =>
        hEntry.isBrief ? ( //if in brief mode
          <div>
            {typeof hEntry.response ===
            "string" /* display response as correct type (string/table) */ ? (
              <div>{hEntry.response}</div>
            ) : (
              <div>
                <table>
                  {hEntry.response.map((row) => [
                    <tr>{row.map((elt) => [<td>{elt}</td>])}</tr>,
                  ])}
                </table>
              </div>
            )}
          </div>
        ) : (
          //if in verbose moce
          <div>
            <p>Command: {hEntry.command}</p>
            <p>Output:</p>
            {typeof hEntry.response ===
            "string" /* display response as correct type (string/table) */ ? (
              <div>{hEntry.response}</div>
            ) : (
              <div>
                <table>
                  {hEntry.response.map((row) => [
                    <tr>{row.map((elt) => [<td>{elt}</td>])}</tr>,
                  ])}
                </table>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
