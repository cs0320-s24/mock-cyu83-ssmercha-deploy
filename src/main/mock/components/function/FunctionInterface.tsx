import { Dispatch, SetStateAction, useState } from "react";

/**
 * This is the interface for REPLFunction
 */
export interface REPLFunction {
  (
    cmdMap: Map<string, REPLFunction>, //a map from command names to their corresponding REPLFunctions
    setModeIsBrief: Dispatch<SetStateAction<boolean>>, //setting the mode
    args: string[] //arguments for the function
  ): string | string[][];
}
