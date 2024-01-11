import React, {createContext, useContext, useState} from "react";
interface RecipeContext {
    active: string,
    setActive: (key: string) => void,
}

const SelectContext = createContext<RecipeContext | undefined>(undefined);

interface SelectProps {
    children: React.ReactNode,
    className?: string,
    source: "menu" | "inventory"
}

export const Select = ({children, className, source}: SelectProps) => {
    const [active, setActive] = useState<string>("");
    return(
        <SelectContext.Provider value={{active, setActive}}>
            {source === "menu" ? (
                <select className={className}>
                    {children}
                </select>
            ) : (<>
                {children}
                </>
            )}
        </SelectContext.Provider>
    )
}

interface OptionProps {
    children: React.ReactNode,
    itemName: string,
}
const Option = ({children, itemName}: OptionProps) => {
    const {active, setActive} = useSelectContext();
    const isActive = active === itemName;
    const className = isActive ? "active" : "not-active";
    return(
        <div className={className} onClick={() => {setActive(itemName)}}>
            {children}
        </div>
    )
}

Select.Option = Option;

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if (context === undefined) {
        throw new Error('useSelectContext must be used within a SelectProvider');
    }
    return context;
}

export default Select;