import React from "react";
import ListAdd from "./ListAdd";
import ListView from "./ListView";

import { ToastContainer, toast } from 'react-toastify';


class TodoApp extends React.Component {
    state = {
        listJob: [
            { id: 1, content: 'việc thứ 1' },
            { id: 2, content: 'việc thứ 2' }
        ],
        showUpdateForm: false,
    }

    //Thêm job
    addJob = (job) => {
        let currentListJob = [...this.state.listJob];
        currentListJob.push(job);
        this.setState({
            listJob: currentListJob,
        });
    }

    //Xóa job
    deleteJob = (job) => {
        //console.log(this.state.listJob);
        console.log(`Xóa thành công: id-"${job.id}" content-"${job.content}"`);
        toast.success('Xóa thành công');
        this.setState({
            listJob: this.state.listJob.filter(item => item.id !== job.id),
        })
    }

    //Cập nhật job
    updateJob = (job) => {
        //console.log(this.state.listJob);
        let curent = this.state.listJob;
        curent[job.id - 1].content = job.content;
        console.log(`Cập nhật thành công: id-"${job.id}" content-"${job.content}"`);
        toast.success('Cập nhật thành công');
        this.setState({
            listJob: curent,
        })
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <ListAdd listJob={this.state.listJob} addJob={this.addJob} updateCheck={this.state.updateCheck} updateContent={this.state.updateContent} />
                <ListView listJob={this.state.listJob} deleteJob={this.deleteJob} updateJob={this.updateJob} showUpdateForm={this.state.showUpdateForm} />
            </React.Fragment>
        );
    }
}

export default TodoApp;

