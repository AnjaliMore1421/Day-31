# Day 31 – React Native Deep Theory (Full Detailed Notes)

---

# 1. React Native Architecture (Core Working Model)

React Native is built on a **multi-threaded architecture** that separates logic execution and UI rendering for better performance and smooth user experience.

##  Main Components of Architecture

### 1) JavaScript Thread (JS Thread)
- Runs all JavaScript code written by developer
- Handles:
  - State management (useState, Redux, etc.)
  - Business logic
  - API calls
  - Component rendering logic
- Executes inside JavaScript engine (Hermes / JSC)

 Important:
- JS thread does NOT directly update UI
- It sends instructions to native side

---

### 2) Native UI Thread
- Responsible for actual UI rendering
- Works separately for Android and iOS
- Handles:
  - Layout rendering
  - Animations
  - Touch interactions
- Uses native components like:
  - Android Views
  - iOS UIKit components

---

### 3) Bridge (Communication Layer)

Bridge acts as a **middle communication system** between JS and Native layers.

### How it works:
1. JS thread sends serialized messages
2. Bridge transfers data asynchronously
3. Native thread processes and updates UI

### Key Characteristics:
- Asynchronous communication
- Batch processing of messages
- Improves performance by avoiding direct blocking calls

---

##  Architecture Flow


User Interaction
↓
JavaScript Thread (Logic)
↓
Bridge (Async Communication)
↓
Native UI Thread (Rendering)
↓
Final UI Output on Screen


---


# 2. JSX in React Native Rendering

JSX (JavaScript XML) is a syntax extension that allows writing UI in a declarative format.

##  Important Difference from Web React

- React Web → JSX renders HTML elements (div, span)
- React Native → JSX renders **native components**, NOT HTML

---

##  JSX Conversion Process

JSX → React.createElement() → Native UI Elements → Screen Output

---

##  Example

```jsx
<View style={{ padding: 10 }}>
  <Text>Hello React Native</Text>
</View>
Behind the scenes:
<View> → Native container view
<Text> → Native text label
No DOM exists in React Native

 Key Insight

JSX is only a syntactic sugar for creating native UI structure.

3. Core Components in React Native

React Native provides built-in components instead of HTML tags.

 1. View Component
Equivalent to <div> in web
Used for layout and grouping elements
Supports styling, Flexbox, positioning

Example:
<View style={{ flex: 1, backgroundColor: 'white' }}>

 2. Text Component
Used to display text content
All text MUST be inside <Text>
Supports styling like fontSize, color, weight

Example:
<Text style={{ fontSize: 18, color: 'black' }}>
  Welcome User
</Text>

 3. Image Component
Used to display images
Supports:
Local images
Network images (URL)
Example:
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 100, height: 100 }}
/>

 4. ScrollView Component
Used for scrollable content
Renders all children at once
Suitable for small/medium lists
Example:
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>


4. Flexbox in React Native vs React Web

Flexbox is the primary layout system in React Native.

 Key Differences -
Feature           	        React Web	              React Native
Default direction            	row	                      column
Units	                      px, %, em	             unitless numbers
Display	                  block / flex	            always flex
DOM	                        present	                  not present
Styling	                      CSS	                  JS style objects

 Core Flexbox Properties
1. flexDirection
Controls direction of layout
Values:
row
column (default in RN)

2. justifyContent
Aligns items along main axis
Values:
flex-start
center
flex-end
space-between
space-around

3. alignItems
Aligns items along cross axis
Values:
flex-start
center
flex-end
stretch

4. flex
Controls space distribution
Example:
flex: 1

 Example Layout
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Text>Hello UI</Text>
</View>




5. Metro Bundler & Hot Reload System

React Native development is powered by Metro Bundler.

 Metro Bundler

Metro is a JavaScript bundler specifically built for React Native.

Responsibilities:
Bundles JS code into a single file
Resolves dependencies
Optimizes assets (images, fonts)
Provides fast builds

 Build Process Flow
React Native Code
      ↓
Metro Bundler
      ↓
JS Bundle Creation
      ↓
Native App Execution

 Hot Reload / Fast Refresh

Hot Reload allows developers to instantly see changes.

Features:
Updates UI without restarting app
Preserves application state
Faster debugging
Improves development speed
 
 Why Metro is Important -
1)Handles entire JS pipeline
2)Makes React Native lightweight
3)Enables cross-platform compatibility
