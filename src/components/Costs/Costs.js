import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostList from './CostsList'
import { useState } from 'react'
import CostsDiagram from './CostsDiagram'


function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2022')

    const changeYearHandler = (year) => {
        setSelectedYear(year)
    }

    const filtredCosts = props.costs
        .filter((cost) => cost.date.getFullYear().toString() === selectedYear)    

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
                <CostsDiagram costs={filtredCosts}/>
                <CostList costs={filtredCosts}/>
            </Card>
        </div>
    )
}

export default Costs