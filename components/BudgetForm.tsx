import { useState } from 'react' ;
import { ExpensesCategory } from '@/types/expense' ;
import { getCategoryName } from '@/utils/categoryUtils ';
import { Button } from '@/components/ui/button' ;
import { Input } from '@/components/ui/input' ;
import { Label } from '@/components/ui/label' ;

interface BudgetFormProps {
    category: ExpensesCategory ;
    currentAmount: number ;
    onSubmit: (amount: number) => void ;
    onCancel: () => void ;
}

const BudgetForm = ({ category, currentAmount, onSubmit, onCancel }: BudgetFormProps) =>
 const [amount, setAmount] = useState(currentAmount.toString()) ;

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() ;
const numAmount = parseFloat(amount);

if (isNaN(numAmount) || numAmount < 0) {
    alert('Please enter a valid amount') ;
    return ;
}
onSubmit(numAmount) ;
};
 
return (
    <Card className="w-full">
<CardHeader>
    <CardTitle> Set Budget for </CardTitle>
</CardHeader>
    </Card>
)

