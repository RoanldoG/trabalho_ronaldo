myApp.controller('MeuController', function($scope){
	$scope.pessoa = {};
	$scope.isEdit = false;
	$scope.isVisible = false;
	$scope.txtBtn = 'Enviar';
	console.log("isEdit= " + $scope.isEdit);

	$scope.dados = [

		{
			nome : 'Ronaldo',
			telefone : '(46)9925-6888',
			email : 'ronaldogott@gmail.com'
		},
		{
			nome : 'Batman',
			telefone : '(46)9999-9999',
			email : 'batman@gmail.com'
		}

		];

	$scope.enviaDados = function(pessoa){
		if($scope.isEdit){
			$scope.atualizarDados(pessoa);
		} else {
			var minhaPessoa = angular.copy(pessoa);
			$scope.dados.push(minhaPessoa);
			delete $scope.pessoa;
			$scope.txtBtn = 'Enviar';
		}
		$scope.isVisible = false;
		$scope.isEdit = false;
		console.log("isEdit= " + $scope.isEdit);
	}

	$scope.excluirDados = function(item){
		if($scope.isEdit){
			alert("Termine a edição para então excuir o item!");		
		} else{
			$scope.dados.splice(item, 1);
			$scope.isEdit = false;
		}
		console.log("isEdit= " + $scope.isEdit);
	}

	$scope.editarDados = function(item, idx){
		$scope.pessoa = angular.copy(item);
		$scope.idx = idx;
		$scope.isEdit = true;
		$scope.txtBtn = 'Salvar';
		$scope.isVisible = true;
		console.log("isEdit= " + $scope.isEdit);
	}

	$scope.cancelaDados = function(item){
		delete $scope.pessoa;
		$scope.isVisible = false;
		$scope.isEdit = false;
		console.log("isEdit= " + $scope.isEdit);
	}

	$scope.atualizarDados = function(data){
		$scope.dados[$scope.idx] = angular.copy(data);
		delete $scope.pessoa;
		$scope.txtBtn = 'Enviar';
		$scope.isEdit = false;
		console.log("isEdit= " + $scope.isEdit);
	}

})