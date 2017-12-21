import React from 'react';
import { Button } from '../../components/button';
import { Modal } from '../../components/modal';
import { DocPage, Example } from '../../docs/docs-components';

export class ModalPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false
    };
  }
  render() {
    return (
      <DocPage
        {...{
          componentName: 'Modal',
          propList: [
            {
              name: '...props',
              description:
                'All other props will be passed to the inner `input[type="radio"]` element'
            }
          ],
          examples: (
            <div>
              <Example {...{ title: 'Modal dialog' }}>
                <div>
                  <Button onClick={() => this.setState({ isOpen1: true })}>
                    Open dialog
                  </Button>
                  <Modal
                    open={this.state.isOpen1}
                    onClose={() => this.setState({ isOpen1: false })}>
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
              <Example {...{ title: 'Modal flyout from left' }}>
                <div>
                  <Button onClick={() => this.setState({ isOpen2: true })}>
                    Open left flyout
                  </Button>
                  <Modal
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
                    Open dialog
                  </Button>
                  <Modal
                    animated
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
            </div>
          )
        }}
      />
    );
  }
}
