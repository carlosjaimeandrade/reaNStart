import React, { useState, useEffect } from 'react';
import { Button, NativeBaseProvider, Spinner } from "native-base";

export default () => {
  return (
    <NativeBaseProvider>
      <Button  isLoading isLoadingText="Submitting" variant="outline" size="xs" onPress={() => console.log("hello world")}>Click Me</Button>
      <Spinner size="lg" accessibilityLabel="Loading posts" />
    </NativeBaseProvider>
      
  )
}