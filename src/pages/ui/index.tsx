import BButton from "@/components/base/BButton/BButton";


const UiKIt = () => {
    return (
        <div className="container py-20">
            <h1 className='t-h1'>Кнопки</h1>
            <div className="flex gap-20">
                <BButton>Primary button</BButton>
                <BButton variant="secondary">Secondary button</BButton>
            </div>
        </div>
    );

}

export default UiKIt;
