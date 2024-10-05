import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';

const Form = ({ setExpense }) => {
  //   const [title, setTitle] = useState('');
  //   const [category, setCategory] = useState('');
  //   const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [exp, setExp] = useState({
    title: '',
    category: '',
    amount: ''
  })

  // const handleInput = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleSelect = (e) => {
  //   setCategory(e.target.value);
  // };

  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };

  const validate = (check) => {
    const showError = {};
    // console.log(check);

    if (!check.title) {
      showError.title = "Title is requried";
    }
    if (!check.category) {
      showError.category = "Select the Category";
    }
    if (!check.amount) {
      showError.amount = "Please Enter the Amount";
    }
    setError(showError);
    return Object.keys(showError).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(exp);
    // const newExpense = {
    //   id: crypto.randomUUID(),
    //   title,
    //   category,
    //   amount: Number(amount),
    // };

    // if (exp.title === '' || exp.category === '' || exp.amount === '') {
    //   alert('Please fill in all fields');
    //   return;
    // }
    const a = validate(exp);
    console.log(Object.keys(a));
    if (Object.keys(a).length) return;

    if (validate(exp)) {
      setExpense((prevExpenses) => [...prevExpenses, exp]);

      // setTitle('');
      // setCategory('');
      // setAmount('');
      setExp({
        title: '',
        category: '',
        amount: ''
      })
      setError({});
    }
  };

  console.log(exp)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExp((prev) => ({ ...prev, [name]: value, }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=''>
        <h1 className='text-3xl font-bold'>Track your Expense</h1>
        <div>
          <h3 className='text-lg font-medium mt-7'>Title</h3>
          <Input
            className='w-96 py-1 text-lg border-2 border-black px-2 rounded-md'
            name='title'
            value={exp.value}
            onChange={handleChange}
            type="text"
            placeholder='Title'
            error={error.title}
          />
        {/* <p className='text-red-600 absolute'>{}</p> */}

          <h3 className='mt-5 text-lg font-medium'>Category</h3>
          <Select
            name='category'
            value={exp.value}
            onChange={handleChange}
            className='w-96 h-10 py-2 border-2 border-black rounded-md'
            error={error.category}
            options={['Grocery', 'Bills', 'Clothes', 'Medicine', 'Education']}
            defaultOption='Choose Catogery'
          >
          </Select>
          {/* <option hidden>Choose Category</option>
            <option value="grocery">Grocery</option>
            <option value="bills">Bills</option>
            <option value="clothes">Clothes</option>
            <option value="medicines">Medicines</option>
            <option value="education">Education</option> */}

          <h3 className='text-lg font-medium mt-5'>Amount</h3>
          <Input
            name='amount'
            value={exp.value}
            onChange={handleChange}
            className='w-96 py-1 text-lg border-2 border-black px-2 rounded-md'
            type="text"
            placeholder='Enter the Amount'
            error={error.amount}
          />
          {/* <p className='text-red-500 absolute'>{error.amount}</p> */}
        </div>
        <button
          className='w-96 py-3 rounded-md bg-slate-300 mt-7'
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
