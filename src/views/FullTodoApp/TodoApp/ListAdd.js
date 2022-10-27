import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class ListAdd extends React.Component {

    state = {
        title: '',
        content: '',
    }

    handleOnchangeTitle(event) {
        this.setState({
            title: event.target.value,
        });
    }

    handleOnchangeContent(event) {
        this.setState({
            content: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.content === '') {
            toast.error('Chưa có giá trị');
        }
        else {
            let job = {
                id: this.props.listJob.length + 1,
                content: document.getElementById('ipContent').value,
            };
            console.log(`Thêm thành công: id-"${job.id}" title-"${job.title}" content-"${job.content}"`);
            this.props.addJob(job);
            toast('Thêm Thành Công');
        }
    }


    render() {
        //console.log(this.props);
        return (
            <React.Fragment>
                <ToastContainer></ToastContainer>
                <form>
                    <input id='ipContent' type='text' value={this.state.content} placeholder='Thêm Công Việc' onChange={(event) => this.handleOnchangeContent(event)} />
                    <span>
                        <input type='submit' value='Add' onClick={(event) => this.handleSubmit(event)} />
                    </span>
                </form>
            </React.Fragment>
        );
    }

}

export default ListAdd;