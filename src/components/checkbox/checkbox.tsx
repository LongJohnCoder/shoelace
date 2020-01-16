import { Component, Method, Prop, State, Watch, h } from '@stencil/core';

let id = 0;

@Component({
  tag: 'sl-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  id = `sl-checkbox-${++id}`;
  labelId = `sl-checkbox-label-${id}`;
  input: HTMLInputElement;

  constructor() {
    this.handleInput = this.handleInput.bind(this);
  }

  @State() hasFocus = false;

  /** A native input's name attribute. */
  @Prop() name: string;

  /** The native input's value attribute. */
  @Prop() value: string;

  /** Set to true to disable the checkbox. */
  @Prop() disabled = false;

  /** Set to true to draw the checkbox in a checked state. */
  @Prop({ mutable: true }) checked = false;

  /** Set to true to draw the checkbox in an indeterminate state. */
  @Prop({ mutable: true }) indeterminate = false;

  @Watch('indeterminate')
  handleIndeterminateChange() {
    this.input.indeterminate = this.indeterminate;
  }

  componentDidLoad() {
    this.input.indeterminate = this.indeterminate;
  }

  /** Sets focus on the checkbox. */
  @Method()
  async setFocus() {
    this.input.focus();
  }

  /** Removes focus from the checkbox. */
  @Method()
  async removeFocus() {
    this.input.blur();
  }

  handleInput() {
    this.checked = this.input.checked;
    this.indeterminate = this.input.indeterminate;
  }

  render() {
    return (
      <label
        htmlFor={this.id}
        role="checkbox"
        class={{
          'sl-checkbox': true,
          'sl-checkbox--checked': this.checked,
          'sl-checkbox--disabled': this.disabled,
          'sl-checkbox--focused': this.hasFocus,
          'sl-checkbox--indeterminate': this.indeterminate
        }}
      >
        <span class="sl-checkbox__control">
          {this.checked ? (
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g stroke="currentColor" stroke-width="2">
                  <g transform="translate(3.000000, 3.000000)">
                    <path d="M0,5 L3,8"></path>
                    <path d="M8,0 L3,8"></path>
                  </g>
                </g>
              </g>
            </svg>
          ) : null}

          {!this.checked && this.indeterminate ? (
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g stroke="currentColor" stroke-width="2">
                  <g transform="translate(2.000000, 6.000000)">
                    <path d="M9,1 L1,1"></path>
                  </g>
                </g>
              </g>
            </svg>
          ) : null}

          <input
            ref={el => (this.input = el)}
            id={this.id}
            type="checkbox"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            aria-labeledby={this.labelId}
            onBlur={() => (this.hasFocus = false)}
            onFocus={() => (this.hasFocus = true)}
            onInput={this.handleInput}
          />
        </span>

        <span id={this.labelId} class="sl-checkbox__label">
          <slot />
        </span>
      </label>
    );
  }
}