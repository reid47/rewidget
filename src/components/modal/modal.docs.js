import React from 'react';
import { Button } from '../button/button';
import { Modal } from './modal';
import { DocPage, Example } from '../../../docs/components';

export default class ModalDocs extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
    isOpen7: false,
    isOpen8: false
  };

  render() {
    return (
      <DocPage component={Modal}>
        <Example {...{ title: 'Modal dialog' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen1: true })}>
              Open dialog
            </Button>
            <Modal
              aria-label="Example modal"
              open={this.state.isOpen1}
              onClose={() => this.setState({ isOpen1: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '400px',
                  height: '200px',
                  overflowY: 'auto',
                  display: 'block'
                }}>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
                <p>This is a line of modal content.</p>
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Modal flyout from left' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen2: true })}>
              Open left flyout
            </Button>
            <Modal
              aria-label="Example modal flyout from left"
              type="flyout-left"
              open={this.state.isOpen2}
              onClose={() => this.setState({ isOpen2: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '400px',
                  height: '100%'
                }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Modal flyout from right' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen3: true })}>
              Open right flyout
            </Button>
            <Modal
              aria-label="Example modal flyout from right"
              type="flyout-right"
              open={this.state.isOpen3}
              onClose={() => this.setState({ isOpen3: false })}>
              <div
                className="modal-content-example"
                style={{ width: '400px', height: '100%' }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Full-screen modal' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen4: true })}>
              Open full-screen modal
            </Button>
            <Modal
              aria-label="Example full-screen modal"
              type="fullscreen"
              open={this.state.isOpen4}
              onClose={() => this.setState({ isOpen4: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '100%',
                  height: '100%'
                }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Animated modal dialog' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen5: true })}>
              Open animated dialog
            </Button>
            <Modal
              animated
              aria-label="Example animated modal"
              open={this.state.isOpen5}
              onClose={() => this.setState({ isOpen5: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '400px',
                  height: '200px'
                }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Animated modal flyout from left' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen6: true })}>
              Open left flyout
            </Button>
            <Modal
              animated
              aria-label="Example animated flyout from left"
              type="flyout-left"
              open={this.state.isOpen6}
              onClose={() => this.setState({ isOpen6: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '400px',
                  height: '100%'
                }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Animated modal flyout from right' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen7: true })}>
              Open right flyout
            </Button>
            <Modal
              animated
              aria-label="Example animated flyout from right"
              type="flyout-right"
              open={this.state.isOpen7}
              onClose={() => this.setState({ isOpen7: false })}>
              <div
                className="modal-content-example"
                style={{ width: '400px', height: '100%' }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
        <Example {...{ title: 'Animated full-screen modal' }}>
          <div>
            <Button onClick={() => this.setState({ isOpen8: true })}>
              Open animated full-screen modal
            </Button>
            <Modal
              type="fullscreen"
              animated
              aria-label="Example animated full-screen modal"
              open={this.state.isOpen8}
              onClose={() => this.setState({ isOpen8: false })}>
              <div
                className="modal-content-example"
                style={{
                  width: '100%',
                  height: '100%'
                }}>
                I am modal content!
              </div>
            </Modal>
          </div>
        </Example>
      </DocPage>
    );
  }
}
