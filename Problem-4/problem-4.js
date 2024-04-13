function sum_to_n_a(n){
	let i = 1;
	let sum = 0;
	while (i <= n){
		sum += i;
		i++;
	}

	return sum;
}

function sum_to_n_b(n){
	if (n == 1) return 1;
	return n + sum_to_n_b(n - 1);
}

function sum_to_n_c(n){
	return n * (n + 1)/2;
}
