import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";

const Loader = (props) => {
  if (props.primary)
    return (
      <ContentLoader
        viewBox='0 0 1100 507'
        backgroundColor='lightgrey'
        height={557}
        width={1000}
        {...props}
      >
        <Rect x='30' y='20' rx='0' ry='0' width='130' height='23' />
        <Rect x='30' y='60' rx='0' ry='0' width='200' height='120' />
        <Rect x='30' y='189' rx='0' ry='0' width='200' height='15' />
        <Rect x='30' y='211' rx='0' ry='0' width='140' height='15' />
        <Rect x='243' y='60' rx='0' ry='0' width='200' height='120' />
        <Rect x='243' y='189' rx='0' ry='0' width='200' height='15' />
        <Rect x='243' y='211' rx='0' ry='0' width='140' height='15' />
        <Rect x='455' y='60' rx='0' ry='0' width='200' height='120' />
        <Rect x='455' y='189' rx='0' ry='0' width='200' height='15' />
        <Rect x='455' y='211' rx='0' ry='0' width='140' height='15' />
        <Rect x='667' y='60' rx='0' ry='0' width='200' height='120' />
        <Rect x='667' y='188' rx='0' ry='0' width='200' height='15' />
        <Rect x='667' y='209' rx='0' ry='0' width='140' height='15' />
        <Rect x='30' y='280' rx='0' ry='0' width='130' height='23' />
        <Rect x='30' y='320' rx='0' ry='0' width='200' height='120' />
        <Rect x='30' y='450' rx='0' ry='0' width='200' height='15' />
        <Rect x='30' y='474' rx='0' ry='0' width='140' height='15' />
        <Rect x='243' y='320' rx='0' ry='0' width='200' height='120' />
        <Rect x='455' y='320' rx='0' ry='0' width='200' height='120' />
        <Rect x='667' y='320' rx='0' ry='0' width='200' height='120' />
        <Rect x='243' y='450' rx='0' ry='0' width='200' height='15' />
        <Rect x='455' y='450' rx='0' ry='0' width='200' height='15' />
        <Rect x='667' y='450' rx='0' ry='0' width='200' height='15' />
        <Rect x='243' y='474' rx='0' ry='0' width='140' height='15' />
        <Rect x='455' y='474' rx='0' ry='0' width='140' height='15' />
        <Rect x='667' y='474' rx='0' ry='0' width='140' height='15' />
      </ContentLoader>
    );
  if (props.secondary)
    return (
      <ContentLoader
        backgroundColor='lightgrey'
        height='500'
        width='850'
        viewBox='0 0 795 410'
      >
        <Rect x='15' y='15' rx='4' ry='4' width='350' height='25' />
        <Rect x='15' y='50' rx='2' ry='2' width='350' height='150' />
        <Rect x='15' y='230' rx='2' ry='2' width='170' height='20' />
        <Rect x='60' y='230' rx='2' ry='2' width='170' height='20' />
      </ContentLoader>
    );
};
const styles = StyleSheet.create({});

export default Loader;
