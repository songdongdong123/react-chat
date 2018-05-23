import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import "./scroll.css"

class Scroll extends React.Component {
	componentDidUpdate() {
    // 完成渲染新的props或者state后调用，此时可以访问到新的DOM元素
		//组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
		if (this.bScroll && this.props.refresh === true) {
      console.log(this.bScroll)
			this.bScroll.refresh()
		}
	}
	componentDidMount() {
    // 真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。
		this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView)
		if (!this.bScroll) {
			this.bScroll = new BScroll(this.scrollView, {
				scrollX: this.props.direction === "horizontal",
				scrollY: this.props.direction === "vertical",
				//实时派发scroll事件
				probeType: 3,
				click: this.props.click
			})
			if (this.props.onScroll) {
				this.bScroll.on("scroll", (scroll) => {
					this.props.onScroll(scroll);
				});
			}
		}
	}
	componentWillUnmount() {
    // 组件被移除之前被调用，可以用于做一些清理工作，
    // 在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
		this.bScroll.off("scroll");
		this.bScroll = null;
	}
	refresh() {
		if (this.bScroll) {
			this.bScroll.refresh();
		}
	}
	render() {
		return (
			<div className="scroll-view" ref="scrollView">
				{/*获取子组件*/}
				{this.props.children}
			</div>
		);
	}
}

Scroll.defaultProps = {
	direction: "vertical",
	click: true,
	refresh: false,
	onScroll: null
};

Scroll.propTypes = {
	direction: PropTypes.oneOf(['vertical', 'horizontal']),
	//是否启用点击
	click: PropTypes.bool,
	//是否刷新
	refresh: PropTypes.bool,
	onScroll: PropTypes.func
};

export default Scroll