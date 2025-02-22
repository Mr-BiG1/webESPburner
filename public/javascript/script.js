let port;
let writer;
let reader;

async function connectESP() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
        console.log("esp connecting ");
        writer = port.writable.getWriter();
        reader = port.readable.getReader();
        logMessage("Connected to ESP");

    } catch (error) {
        logMessage("Connection failed: " + error.message);
    }
}

async function flashFirmware() {
    if (!port) {
        logMessage("Please connect to ESP first.");
        return;
    }

    const fileInput = document.getElementById("firmware");
    if (!fileInput.files.length) {
        logMessage("Please select a firmware file.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async function (e) {
        const firmwareData = new Uint8Array(e.target.result);
        logMessage("Flashing firmware...");

        try {
            await writer.write(firmwareData);
            logMessage("Flashing complete!");
        } catch (error) {
            logMessage("Flashing failed: " + error.message);
        }
    };
}

function logMessage(msg) {
    document.getElementById("log").textContent += msg + "\n";
}

document.getElementById("connect").addEventListener("click", connectESP);
document.getElementById("flash").addEventListener("click", flashFirmware);
