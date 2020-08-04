import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const View = styled.View`
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
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
  images: string[];
};

const BackgroundCarousel = ({ images, auto, hide }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef: any = useRef(null);

  const handleSelectIndex = (event: any) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    setSelectedIndex(index);
  };

  const renderCircleDiv = () => {
    if (hide) return null;
    return (
      <CircleDiv>
        {images.map((image: string, i: number) => (
          <WhiteCircle key={image} selected={i === selectedIndex} />
        ))}
      </CircleDiv>
    );
  };

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      const index = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
      setSelectedIndex(index);

      if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: DEVICE_WIDTH * index,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={!auto}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleSelectIndex}
        ref={scrollRef}>
        {images.map((image: string) => (
          <Image key={image} source={{ uri: image }} />
        ))}
      </ScrollView>
      {renderCircleDiv()}
    </View>
  );
};

export default BackgroundCarousel;
