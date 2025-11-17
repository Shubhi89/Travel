'use client';
import { NodejsRequestData } from "next/dist/server/web/types";
import { useCallback  , useRef} from "react";

export function useDebounce(callback: () => void , delay:number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    return useCallback(() => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(callback , delay)
    } , [callback , delay])
}