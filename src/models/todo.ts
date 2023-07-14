import mongoose from 'mongoose';

interface iTodo{
    title: string;
    description: string;
}

interface iTodoModelInterface extends mongoose.Model<iTodoDoc>{
    build(attr: iTodo): iTodoDoc
}

interface iTodoDoc extends mongoose.Document{
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

todoSchema.statics.build = (attr:iTodo) => {
    return new Todo(attr)
}

const Todo = mongoose.model<any,iTodoModelInterface>('Todo', todoSchema)

export {Todo}