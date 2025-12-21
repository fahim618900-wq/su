<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reaction Timer Game</title>
    <link rel="stylesheet" href="game2.css">
</head>
<body>
    <header>
        <h1>Reaction Timer Game</h1>
        <a href="../index.html" class="btn">Back to Home</a>
    </header>

    <main>
        <p>Wait for the green light, then click as fast as you can!</p>
        <div id="light" class="light red"></div>
        <button id="clickBtn" disabled>Click Me!</button>
        <p id="timeDisplay">Your time: 0 ms</p>
        <p id="message"></p>
    </main>

    <script src="game2.js"></script>
</body>
</html>
