import React from "react";
import './ListView.scss';

class ListView extends React.Component {
    state = {
        showUpdateForm: this.props.showUpdateForm,
        updateFormID: 0,
        updateFormContent: '',
    }

    handleOnchangeupdateFormContent = (event) => {
        this.setState({
            updateFormContent: event.target.value,
        });
    }

    handleSave = (event) => {
        event.preventDefault();
        this.setState({
            showUpdateForm: false,
        });
        this.props.updateJob({ id: this.state.updateFormID, content: this.state.updateFormContent });
    }

    //Cập nhật job
    showUpdateForm = (job) => {
        console.log('xxx');
        this.setState({
            showUpdateForm: true,
            updateFormID: job.id,
            updateFormContent: job.content,
        });
    }

    render() {
        return (
            <div className="listJob">
                {
                    this.props.listJob.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                {
                                    this.state.showUpdateForm === false ?
                                        <div className="listJobItem">
                                            {item.id}: {item.content}
                                            <span>
                                                <button id="btnUpdate" onClick={() => { this.showUpdateForm(item) }}>Sửa</button>
                                                <button id="btnDelete" onClick={() => { this.props.deleteJob(item) }}>Xóa</button>
                                            </span>
                                        </div>
                                        :
                                        <React.Fragment>
                                            {
                                                item.id === this.state.updateFormID ?
                                                    <div className="listJobItem">
                                                        {item.id}: <input id='ipUpdateContent' type='text' value={this.state.updateFormContent} placeholder='Sửa Công Việc' onChange={(event) => this.handleOnchangeupdateFormContent(event)} />
                                                        <span>
                                                            <input type='submit' value='Save' onClick={(event) => this.handleSave(event)} />
                                                        </span>
                                                    </div>
                                                    :
                                                    <div className="listJobItem">
                                                        {item.id}: {item.content}
                                                        <span>
                                                            <button id="btnUpdate" onClick={() => { this.showUpdateForm(item) }}>Sửa</button>
                                                            <button id="btnDelete" onClick={() => { this.props.deleteJob(item) }}>Xóa</button>
                                                        </span>
                                                    </div>
                                            }
                                        </React.Fragment>

                                }

                            </React.Fragment>
                        )
                    })

                }
            </div >
        );
    }
}

export default ListView;
