import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const View = styled.View`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Image = styled.Image`
  height: 100%;
  width: ${DEVICE_WIDTH}px;
  opacity: 0.7;
`;

const CircleDiv = styled.View`
  position: absolute;
  bottom: 16px;
  height: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type WhiteCircleProps = {
  selected: boolean;
};

const WhiteCircle = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin: 5px;
  background-color: white;
  opacity: ${(props: WhiteCircleProps) => (props.selected ? 1 : 0.5)};
`;

type Props = {
  auto: boolean;
  hide: boolean;
  images: Array<string>;
};

type State = {
  selectedIndex: number;
};

class BackgroundCarousel extends Component<Props, State> {
  scrollRef = React.createRef<ScrollView>();
  constructor(props: any) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount = () => {
    if (!this.props.auto) return;

    setInterval(() => {
      this.setState(
        (prev) => {
          const selectedIndex =
            prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1;
          return { selectedIndex };
        },
        () => {
          if (!this.scrollRef || !this.scrollRef.current) return;
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        },
      );
    }, 3000);
  };

  setSelectedIndex = (event: any) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex });
  };

  renderCircleDiv = () => {
    if (this.props.hide) return null;

    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <CircleDiv>
        {images.map((image: string, i: number) => (
          <WhiteCircle key={image} selected={i === selectedIndex} />
        ))}
      </CircleDiv>
    );
  };

  render = () => {
    const { images } = this.props;
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled={!this.props.auto}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((image: string) => (
            <Image key={image} source={{ uri: image }} />
          ))}
        </ScrollView>
        {this.renderCircleDiv()}
      </View>
    );
  };
}

export default BackgroundCarousel;
