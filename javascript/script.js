document.addEventListener('DOMContentLoaded', () => {
	const inputText = document.getElementById('inputText');
	const outputText = document.getElementById('outputText');
	const noResultText = document.getElementById('noResultText');
	const copyButton = document.getElementById('copyButton');
	const encryptButton = document.getElementById('encryptButton');
	const decryptButton = document.getElementById('decryptButton');

	const encryptionKeys = {
		e: 'enter',
		i: 'imes',
		a: 'ai',
		o: 'ober',
		u: 'ufat',
	};

	const decryptionKeys = {
		enter: 'e',
		imes: 'i',
		ai: 'a',
		ober: 'o',
		ufat: 'u',
	};

	function encryptText(text) {
		return text.replace(/[eioua]/g, (match) => encryptionKeys[match]);
	}

	function decryptText(text) {
		return text.replace(/enter|imes|ai|ober|ufat/g, (match) => decryptionKeys[match]);
	}

	encryptButton.addEventListener('click', () => {
		const text = inputText.value;
		if (text) {
			const encryptedText = encryptText(text);
			outputText.value = encryptedText;
			toggleOutputVisibility();
		}
	});

	decryptButton.addEventListener('click', () => {
		const text = inputText.value;
		if (text) {
			const decryptedText = decryptText(text);
			outputText.value = decryptedText;
			toggleOutputVisibility();
		}
	});

	copyButton.addEventListener('click', async () => {
		try {
			await navigator.clipboard.writeText(outputText.value);
			alert('Texto copiado al portapapeles');
		} catch (err) {
			console.error('Error al copiar el texto: ', err);
		}
	});

	inputText.addEventListener('input', () => {
		if (inputText.value === '') {
			noResultText.style.display = 'block';
			outputText.style.display = 'none';
			copyButton.style.display = 'none';
		}
	});

	function toggleOutputVisibility() {
		if (outputText.value) {
			outputText.style.display = 'block';
			copyButton.style.display = 'block';
			noResultText.style.display = 'none';
		} else {
			outputText.style.display = 'none';
			copyButton.style.display = 'none';
			noResultText.style.display = 'flex';
		}
	}

	toggleOutputVisibility();
});
